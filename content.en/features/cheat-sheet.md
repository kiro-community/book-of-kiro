---
title: "Complete Kiro Cheat Sheet"
weight: 1
---

# Complete Kiro Cheat Sheet

## 📌 **Introduction: What is Kiro? Why is it so popular lately?**

Kiro is a revolutionary AI Integrated Development Environment (IDE) released by AWS in July 2025.<br>
"Huh? Another editor? Aren't VSCode and Cursor enough?" — If you're thinking this, please don't close this page yet. Because **Kiro is truly not an ordinary editor.**

## 🤔 **The Decisive Difference from Traditional IDEs**

With traditional IDEs, coding is 100% on you alone.<br>
But Kiro is different — it's your **AI development partner** that can think with you, make suggestions, and even write code.<br>
It's like having an experienced senior engineer always by your side for pair programming!<br>

## ✨ **What Kiro Can Do (Here's the key part)**

🤖 **Write code through AI conversation**: Just say "help me create a login feature" and it really can build it<br>
📋 **Auto-generate specifications**: Transform vague requirements into clear, structured specs<br>
🔧 **Agent Hooks automation**: For example, when you save a file, it can automatically run tests and format code<br>
🎯 **Steering remembers project knowledge**: Background info like "our project uses TypeScript" — it remembers once and for all<br>
🔌 **MCP supports external tool integration**: Can integrate with GitHub, AWS Docs, and even web search<br>
🛡️ **Safe runtime environment**: Prevents the tragedy of "oh no, I deleted everything!"<br>

## 🚀 **Quick Start - Launch Kiro in 5 Minutes!**

### **Fastest Installation Guide (Really just 5 minutes)**

First, let's install Kiro. Don't worry, it's as simple as installing any regular app!<br>

{{% hint info %}}

1. Download
   Visit https://kiro.dev/, click the "Download" button #Supports macOS, Windows, and Linux<br>

2. Install
   macOS: Drag the downloaded Kiro.app to Applications folder<br>
   Windows: Double-click the downloaded installer to run<br>
   Linux: Add execute permissions to the AppImage and launch<br>

3. Initial setup (This is super important!)<br>
   {{% /hint %}}

#### 🔐 **Login Method Selection**

- **GitHub**: If you're an individual developer, this is the easiest choice<br>
- **Google**: One-click login with Gmail account<br>
- **AWS Builder ID**: Don't have an AWS account? Choose this (and it's completely free)
- **AWS IAM Identity Center**: Suitable for company or team environments<br>

#### ⚙️ Import VS Code Settings

Selecting "**Import VS Code Settings**" allows you to directly inherit your current editor configuration,
including extensions and theme styles — everything can be reused as-is, very convenient!

#### 💻 **Enable Shell Integration (Must-select!)**

When prompted, please be sure to click "**Allow**"!<br>
This step allows AI to directly run terminal commands, unlocking the full automated development experience 🚀

### 📂 **Let's open your first project!**

```bash
# If you prefer opening projects via terminal:
cd my-project
kiro .

# Or you can operate from Kiro's menu bar:
File > Open Folder > Select your project folder
```

After opening the project, click the **Kiro ghost icon** in the left sidebar. This is Kiro's core area and where you start conversations with AI!👻<br>

### 💬 **Try chatting with AI!**

```bash
# Open chat panel
Cmd+L (Mac) / Ctrl+L (Windows/Linux)

# Try asking these first
"Explain the structure of this project"
"Organize the dependencies in package.json"
"Help me make the README more complete"
```

You'll be amazed at how natural and smooth the conversation can be!💬✨

## 🔑 **Complete Authentication Guide - Which Should You Choose?**

### **Method 1: GitHub Login (Recommended for individual developers, Rating: ★★★★★)**

{{% hint info %}}

<span style="color:red;">Who is it for?</span>

- Developers who code individually
- Those participating in open source projects
- People who want to simply try Kiro first

<span style="color:red;">Advantages</span>

- Simplest setup process
- Just need a GitHub account to use directly
- Free quota is sufficient for most people

<span style="color:red;">Usage Steps</span>

1. Click "Sign in with GitHub"
2. Browser will automatically redirect, log in to your GitHub
3. Click "Authorize kirodotdev" to authorize
4. Done! You can start using it immediately ✨
   {{% /hint %}}

### **Method 2: Google Login (Suitable for light users, Rating: ★★★★☆)**

{{% hint info %}}

<span style="color:red;">Suitable for these people</span>

- Have Gmail but no GitHub account
- Want to use it for personal learning
- Just want to easily and quickly get started

<span style="color:red;">Advantages</span>

- Can log in directly with Google account
- No additional setup needed
- Very suitable for personal daily use

<span style="color:red;">Operation Steps</span>

1. Click "Sign in with Google"
2. Select your Google account
3. Click "Continue" to complete authorization
4. Done! Isn't it super easy? ✨
   {{% /hint %}}

### **Method 3: AWS Builder ID (Suitable for users new to AWS, Rating: ★★★☆☆)**

{{% hint info %}}

<span style="color:red;">Suitable for these people</span>

- Want to try AWS but don't want to register a formal account initially
- Want to experience some AWS services for free
- People who might formally use AWS in the future

<span style="color:red;">Advantages</span>

- Can use without registering a complete AWS account, completely free
- Very convenient integration with various AWS services
- Can smoothly transition to enterprise account later

<span style="color:red;">Operation Steps</span>

1. Click "Login with AWS Builder ID"
2. Enter your email address
3. Set login password
4. Complete email verification, and you can start using ✅
   {{% /hint %}}

### **Method 4: AWS IAM Identity Center (Suitable for enterprise users, Rating: ★★★★★)**

{{% hint info %}}

<span style="color:red;">Suitable for these people</span>

- Want to formally deploy Kiro within the company
- Enterprise environments with strict security requirements
- Teams that have already purchased Amazon Q Developer Pro

<span style="color:red;">Notes</span>

- Requires paid subscription to Amazon Q Developer Pro
- Needs company IT department assistance for configuration
- Not suitable for individual users

<span style="color:red;">Usage Steps</span>

1. Select "Sign in with AWS IAM Identity Center"
2. Enter Start URL, e.g.: https://your-company.awsapps.com/start
3. Select Region: usually us-east-1 (specific to company)
4. Contact company IT department to complete related setup
   {{% /hint %}}

## ⌨️ **Complete Keyboard Shortcuts Mastery Guide**

### 🎯 **Must Remember! Top 10 Super Useful Kiro Shortcuts**

Just remember these few, and you can basically use 80% of Kiro's functionality:

| What you want to do | Mac Shortcut | Windows / Linux Shortcut | What happens? |
| --- | --- | --- | --- |
| Chat with AI | Cmd + L | Ctrl + L | Open chat panel, start conversation with AI |
| Instantly summon AI | Cmd + I | Ctrl + I | Launch AI at cursor, can ask questions while coding |
| Global search (command palette) | Cmd + Shift + P | Ctrl + Shift + P | Open command palette, access all Kiro functions |
| Open file | Cmd + P | Ctrl + P | Type part of filename to quickly open |
| Save file | Cmd + S | Ctrl + S | Old friend, must remember |
| Project-wide search | Cmd + Shift + F | Ctrl + Shift + F | Search text content throughout the project |
| Jump to definition | F12 | F12 | One-click jump to function or class definition |
| Fix errors | Hover error → Quick fix | Same | AI will automatically provide fix suggestions |
| Open terminal | Ctrl + (backtick \`) | Ctrl + (backtick \`) | Show or hide integrated terminal |
| Show/hide sidebar | Cmd + B | Ctrl + B | Show or hide sidebar, suitable for full-screen operation |

### **💡 Practical and Convenient Small Trick Shortcuts**

```bash
# Multi-cursor editing (learn this and efficiency triples)
Option + click (Mac) / Alt + click (Windows)
→ Can have cursors at multiple locations, edit multiple places simultaneously

# Move entire line of code (super useful little trick)
Option + ↑/↓ (Mac) / Alt + ↑/↓ (Windows)
→ Move entire line of code up/down, super convenient for layout modifications

# Copy entire line (super useful when writing test data)
Option + Shift + ↑/↓ (Mac) / Alt + Shift + ↑/↓ (Windows)
→ Directly copy current line and insert above/below

# Quick comment (most commonly used, bar none)
Cmd + / (Mac) / Ctrl + / (Windows)
→ One-click comment/uncomment selected code, debugging magic skill!
```

## 📋 **Specs (Specification-Driven Development) — This is Kiro's Soul Feature!**

### ❓ **What are Specs? Why are they so important?**

Traditional development often follows this rhythm:

- "Help me create a login feature" — vague requirements
- Well, let's start coding
- "Oh right, don't forget password reset"
- "Email verification should be added too"
- Finally, code becomes a mess, documentation can't keep up, requirements keep changing...

😵‍💫 Complete chaos.
And **Specs** are here to solve this old problem!<br>
It helps AI **organize vague requirements** into a structured, clear **specification document**.<br>
— No more coding while guessing, no more major rewrites later, your project stays on track from the beginning. ✅<br>

### 🛠️ The Three Major Phases of Specs (This is truly revolutionary 🔥)

1️⃣ Requirements Phase — Clarify "what to build"

```yaml
# Actual example: Requirements definition auto-generated by Kiro

## User Story
As a: User
I want to: Log in using email and password
So that: I can use personalized features of the service

## Acceptance Criteria (EARS syntax)
When: User visits the login page
The system shall: Display login form
With:
  - Email address input field
  - Password input field (displayed as mask)
  - "Login" button
  - "Forgot password" link

When: User enters correct authentication information and clicks login button
The system shall: Redirect user to dashboard page
And: Generate JWT token and start session

When: User enters incorrect authentication information
The system shall: Display error message
But: Not show specific error reasons for security purposes
```

Isn't it amazing? Just one sentence "write a login feature" and it can detail requirements to such a degree, truly magical!<br>

2️⃣ **Design Phase** — Plan "how to implement"

```yaml
// Example of technical design document auto-generated by Kiro

## Architecture Design

### Frontend Structure

interface LoginSystem {
  // UI Components
  components: {
    LoginForm: {
      path: "components/auth/LoginForm.tsx"
      props: {
        onSubmit: (credentials: LoginCredentials) => Promise<void>
        onForgotPassword: () => void
      }
    }

    PasswordResetModal: {
      path: "components/auth/PasswordResetModal.tsx"
      props: {
        isOpen: boolean
        onClose: () => void
      }
    }
  }

  // State Management
  stores: {
    AuthStore: {
      state: {
        user: User | null
        isAuthenticated: boolean
        isLoading: boolean
      }
      actions: {
        login: (credentials: LoginCredentials) => Promise<void>
        logout: () => void
        resetPassword: (email: string) => Promise<void>
      }
    }
  }

  // API Communication
  services: {
    AuthService: {
      endpoints: {
        login: "POST /api/auth/login"
        logout: "POST /api/auth/logout"
        resetPassword: "POST /api/auth/reset-password"
      }
    }
  }
}

### Backend Structure
- Using Node.js + Express
- JWT authentication
- Using bcrypt for password hashing
- Managing user information through PostgreSQL
```

It can even auto-generate technical design, and it's customized based on your project's tech stack! Isn't that super thoughtful?<br>

3️⃣ **Implementation Phase** — Break down into specific development tasks

```yaml
## Implementation Task List

### Frontend
- [ ] Create LoginForm component
  - [ ] Implement form validation
  - [ ] Error handling
  - [ ] Manage loading state
- [ ] Implement AuthStore
  - [ ] Login operations
  - [ ] Token management
  - [ ] Auto-logout functionality
- [ ] Implement route guards
  - [ ] Redirect handling for unauthenticated users
  - [ ] Access control for authenticated users

### Backend
- [ ] Implement authentication endpoints
  - [ ] /api/auth/login
  - [ ] /api/auth/logout
  - [ ] /api/auth/refresh
- [ ] Write middleware
  - [ ] JWT verification middleware
  - [ ] Request rate limiting
- [ ] Database design
  - [ ] users table
  - [ ] sessions table

### Testing
- [ ] Unit tests
- [ ] Integration tests
- [ ] End-to-end (E2E) tests
```

Just click on a task and AI will automatically start implementing the corresponding functionality, like assigning work to capable subordinates — easy and efficient!<br>

### 📋 **What's the actual usage of Specs like?**

```yaml
# Method 1: Operate from Kiro panel
1. Click Kiro icon in left sidebar
2. Click "+" button in Specs area
3. Input your requirements in natural language

# Method 2: Generate through chat window
1. Use Cmd/Ctrl + L to open chat panel
2. Click "Spec" button
3. Input your requirement content

# Actual input example
"I want to implement a shopping cart feature for an e-commerce website,
needs to include the following:
- Add/remove products
- Modify product quantities
- Check inventory
- Auto-calculate total amount
- Support coupons
- Shipping calculation"

# Kiro auto-generates content structure as follows
.kiro/specs/shopping-cart/
├── requirements.md  # Detailed requirements definition
├── design.md        # Technical design document
└── tasks.md         # Implementation task list
```

This comprehensive cheat sheet provides English-speaking users with all the essential information they need to get started with Kiro, from basic setup to advanced features like Specs, Steering, Agent Hooks, and MCP integration. The format maintains the engaging, practical style of the original while being accessible to English-speaking developers.