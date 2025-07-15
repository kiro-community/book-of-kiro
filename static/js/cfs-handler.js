function getParameterInHashByName(parameterName, url) {
  if (!url) {
    url = window.location.href;
  }

  try {
    const urlFull = new URL(url);
    const urlParameters = new URLSearchParams(urlFull.hash.substring(1));
    const parameterValue = urlParameters.get(parameterName);

    if (parameterValue === null) {
      return null;
    }

    return decodeURIComponent(parameterValue)
  } catch (e) {
    return null;
  }
}

function getValidURL(url) {
  try {
    return new URL(url);
  } catch (e) {
    return null;
  }
}

function generateRandomBytes() {
  const array = new Uint8Array(8);
  crypto.getRandomValues(array);

  return Array.from(array)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

async function generateSha384(val) {
  const encoder = new TextEncoder();
  const msgBuffer = encoder.encode(val);
  const hashBuffer = await crypto.subtle.digest('SHA-384', msgBuffer);

  // Convert hash to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Function that compares hash values using a constant-time comparison approach.
 *
 * We use a constant time comparison function, as opposed to the equality operator, to protect
 * against timing attacks. The equality operator returns the moment it detects any mismatched
 * character. Attackers use this vulnerability to discover hints about the strings being compared.
 * For example, if I am comparing two passwords and not using a constant time comparison function,
 * I can identify matching characters since execution times vary respectively to where the first
 * difference occurs.
 *
 * We use the XOR (^) and OR (|) operations, since they are CPU-level instructions that execute in
 * constant time and do not involve conditional branching. The XOR operation returns zero when both
 * inputs are identical, otherwise it returns a non-zero value. The OR operation accumulates the
 * XOR operation's results, totaling to zero when every comparison is identical. Using bitwise
 * operations and evaluating every character ensures that attackers cannot gain information about
 * the strings we compare.
 *
 * @see {@link https://cwe.mitre.org/data/definitions/208.html}
 *
 * @param {string} source - Value to hash and compare.
 * @param {string} targetHash - Hash we compare the source hash against.
 * @returns {boolean} True if the hashes match.
 */
async function validateSha384(source, targetHash) {
  if (!source || !targetHash) {
    return false;
  }

  const sourceHash = await generateSha384(source);
  const maxLength = Math.max(sourceHash.length, targetHash.length);
  let differences = 0;

  for (let i = 0; i < maxLength; i++) {
    const charCodeA = sourceHash.charCodeAt(i) || 0;
    const charCodeB = targetHash.charCodeAt(i) || 0;
    differences |= charCodeA ^ charCodeB;
  }

  return differences === 0;
}

/*! js-cookie v3.0.4 | MIT */
;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (function () {
    var current = global.Cookies;
    var exports = global.Cookies = factory();
    exports.noConflict = function () { global.Cookies = current; return exports; };
  })());
})(this, (function () { 'use strict';

  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (name, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      name = encodeURIComponent(name)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        name + '=' + converter.write(value, name) + stringifiedAttributes)
    }

    function get (name) {
      if (typeof document === 'undefined' || (arguments.length && !name)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);

          if (name === found) {
            break
          }
        } catch (e) {}
      }

      return name ? jar[name] : jar
    }

    return Object.create(
      {
        set,
        get,
        remove: function (name, attributes) {
          set(
            name,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });
  /* eslint-enable no-var */

  return api;

}));

class HashStorageManager {
    static getHashKey(encodedUrl) {
        return `cfsHashStorage:${encodedUrl}`;
    }

    static storeHash(encodedUrl, hash) {
        if (hash) {
          sessionStorage.setItem(this.getHashKey(encodedUrl), hash);
        }
    }

    static retrieveAndClearHash(encodedUrl) {
        const key = this.getHashKey(encodedUrl);
        const hash = sessionStorage.getItem(key) || "";
        sessionStorage.removeItem(key);
        return hash;
    }
}

const FIFTEEN_MINUTES_FROM_NOW = new Date(Date.now() + 15 * 60 * 1000);
const COOKIE_CONFIG = {
  secure: true,
    sameSite: 'Lax',
    expires: FIFTEEN_MINUTES_FROM_NOW
};

const referrer = window.location.href.split("#")[0];
const hash = window.location.hash;
const currentOrigin = window.location.origin;

async function isValidRequest(policy, kpid, exp, sig, rfp, nonceHash) {
  if (!(policy && kpid && exp && sig && rfp && nonceHash)) {
    return false;
  }
  const computedHash = await generateSha384(rfp);
  return validateSha384(`${computedHash}:${sig}`, nonceHash);
}

async function main() {
  const rfp = Cookies.get("CloudFront-RFP");
  const nonceHash = getParameterInHashByName('nonceHash');
  const policy = getParameterInHashByName('policy');
  const kpid = getParameterInHashByName('kpid');
  const exp = getParameterInHashByName('exp');
  const sig = getParameterInHashByName('sig');
  const encodedTargetUrl = getParameterInHashByName('encodedTargetUrl');
  const decodedTargetUrl = encodedTargetUrl && decodeURIComponent(encodedTargetUrl);
  const validTargetURL = getValidURL(decodedTargetUrl)

  // If there is a redirect caused by invalid Nonce/RFP, the referrer will be the 403.html file, which will cause
  // a redirect loop. If there is encodedTargetUrl is returned as a param, we will use that as the redirect URL.
  let redirectUrl = referrer;
  if (encodedTargetUrl) {
    redirectUrl = validTargetURL && currentOrigin === validTargetURL.origin
      ? decodedTargetUrl
      : currentOrigin;
  }

  if (await isValidRequest(policy, kpid, exp, sig, rfp, nonceHash)) {
    COOKIE_CONFIG.expires = new Date(Number(exp) * 1000);
    Cookies.set('CloudFront-Policy', policy, COOKIE_CONFIG);
    Cookies.set('CloudFront-Key-Pair-Id', kpid, COOKIE_CONFIG);
    Cookies.set('CloudFront-Expiration', exp, COOKIE_CONFIG);
    Cookies.set('CloudFront-Signature', sig, COOKIE_CONFIG);

    const storedHash = HashStorageManager.retrieveAndClearHash(encodeURIComponent(redirectUrl));
    window.location.replace(redirectUrl + storedHash);
  } else {
    const generatedRfp = generateRandomBytes();
    const generatedNonce = await generateSha384(generatedRfp);
    Cookies.set('CloudFront-RFP', generatedRfp, COOKIE_CONFIG)

    if (Cookies.get("CloudFront-Policy")) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Slow down redirects if in infinite loop
    }

    if (!encodedTargetUrl) {
      HashStorageManager.storeHash(encodeURIComponent(redirectUrl), hash);
    }
    window.location.replace(`https://cloudfrontsigner.ninjas.security.a2z.com/v2/authorize?encodedTargetUrl=${encodeURIComponent(redirectUrl)}&cfsNonce=${generatedNonce}`);
  }
}

main()
