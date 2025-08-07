---
title: "Java Upgrade"
weight: 5
bookToc: true
---

{{% hint info %}}
This document covers Amazon Q Developer's Java code upgrade functionality, including usage of the /transform command, limitations, and cost-related questions.
{{% /hint %}}

## Java Upgrade Feature Overview

### Q. What's the relationship between AWS Transform and /transform in Amazon Q Developer?

The original three major functions (.NET, Mainframe, VMWare) in Amazon Q Developer have been separated from Amazon Q Developer to become the new service AWS Transform. Amazon Q Developer currently only includes Java Transform.

## Feature Usage

### Q. When upgrading Java with the IDE plugin's /transform feature, will dependencies not in the List be upgraded?

No. Especially if some dependencies don't support the new Java version themselves, the upgrade may fail.

{{% hint warning %}}
**Note**: Before using the /transform feature, please ensure that your project dependencies all support the target Java version, otherwise the upgrade may fail.
{{% /hint %}}

## Costs and Limitations

### Q. Beyond the $19/month/person subscription fee, what are the costs for Java upgrade?

Amazon Q Developer uses a fixed subscription model of $19/month/person, which includes all core features and a monthly quota of 4,000 lines of Java code upgrade (shared at account level).

**The only additional cost**: When Java code upgrade exceeds the monthly 4,000-line quota, excess fees are charged at $0.003/line.

### Q. Does the monthly 4,000-line code quota for Java upgrade support account-level sharing?

Yes. Please see the pricing documentation for details.

### Q. Will there be charges if the Java upgrade feature fails or is canceled midway?

No. Charges only occur when the upgrade is completed and you see the DIFF, regardless of whether you accept the changes.

## Best Practices

### Pre-upgrade Preparation

1. **Check dependency compatibility** - Ensure all project dependencies support the target Java version
2. **Backup code** - Create code backups before executing the upgrade
3. **Test environment validation** - First validate the upgrade effect in a test environment

### During Upgrade

1. **Monitor progress** - Pay attention to prompts and warnings during the upgrade process
2. **Review changes** - Carefully check the generated DIFF to ensure changes meet expectations
3. **Batch processing** - For large projects, consider upgrading in batches

### Post-upgrade Validation

1. **Compilation testing** - Ensure the upgraded code compiles normally
2. **Functional testing** - Run the complete test suite to verify functional correctness
3. **Performance testing** - Check performance after upgrade

{{% hint info %}}
**Tip**: It's recommended to test the /transform feature's effectiveness with small projects before upgrading large projects.
{{% /hint %}}

## Common Questions

### Q. What to do if upgrade fails?

1. Check error logs to understand the failure reason
2. Confirm all dependencies support the target Java version
3. Try batch upgrades to reduce the amount of code processed at once
4. If the problem persists, contact AWS Support

### Q. How to optimize upgrade costs?

1. **Reasonable planning** - Perform bulk upgrades at the beginning of the month to fully utilize the free quota
2. **Batch processing** - Avoid upgrading large amounts of code at once, which could lead to excess charges
3. **Team coordination** - Since the quota is shared at the account level, team coordination is needed for usage

### Q. How to ensure the quality of upgraded code?

1. Amazon Q Developer will maintain the functional logic of the code unchanged
2. It's recommended to conduct a complete code review after upgrade
3. Run existing test suites to verify functional correctness
4. For critical business code, additional manual verification is recommended