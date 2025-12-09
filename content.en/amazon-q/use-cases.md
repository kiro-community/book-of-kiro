---
title: "Use Cases and Best Practices"
weight: 15
bookToc: true
bookHidden: true
---

# **💡 Amazon Q Developer Use Cases and Best Practices**

This document helps you better understand and use Amazon Q Developer through specific use cases.

## **🎯 Core Use Cases**

### **1. Code Generation and Development**

{{% columns %}}

**New Feature Development**
```
Help me create a user registration API, including:
- Email validation
- Password encryption
- Database storage
- Error handling
```

**Data Processing**
```
Write a Python script to process CSV files:
- Read sales data
- Group statistics by month
- Generate charts
- Export reports
```

<--->

**Frontend Components**
```
Create a React component:
- Searchable dropdown selector
- Support multiple selection
- With loading state
- TypeScript type definitions
```

**Algorithm Implementation**
```
Implement an efficient sorting algorithm,
with time complexity O(n log n),
and add detailed comments
```

{{% /columns %}}

### **2. Code Review and Optimization**

{{% columns %}}

**Performance Optimization**
```
Analyze the performance bottleneck of this function:
[paste code]

Suggest optimization approaches and rewrite
```

**Security Review**
```
Check this code for security issues:
- SQL injection risks
- XSS vulnerabilities
- Permission verification
```

<--->

**Code Refactoring**
```
Refactor this class to improve:
- Code readability
- Modularization
- Test coverage
```

**Best Practices**
```
Rewrite this code to conform
to Python PEP 8 standards
```

{{% /columns %}}

### **3. Testing and Documentation**

{{% columns %}}

**Unit Testing**
```
Generate complete unit tests for this module:
- Normal case tests
- Boundary condition tests
- Exception handling tests
```

**API Documentation**
```
Generate for this REST API:
- OpenAPI specification
- Usage examples
- Error code descriptions
```

<--->

**Code Comments**
```
Add to this complex algorithm:
- Detailed English comments
- Parameter descriptions
- Return value descriptions
- Usage examples
```

**README Documentation**
```
Analyze the current project structure,
generate a complete README.md,
including installation, usage, and contribution guide
```

{{% /columns %}}

## **🏆 Best Practices Guide**

### **📝 Prompt Writing Techniques**

{{% hint info %}}
**Characteristics of Good Prompts**: Specific, clear, includes context, has clear expected output
{{% /hint %}}

{{% columns %}}

**❌ Poor Prompts**
```
Help me write a function
```
```
This code has issues
```
```
Optimize it
```

<--->

**✅ Good Prompts**
```
Write a JavaScript function,
input an array, return a deduplicated array,
while maintaining the original order
```
```
This Python function is slow
when processing large data,
help me analyze performance bottlenecks and optimize
```
```
Refactor this React component,
separate business logic and UI logic,
improve testability
```

{{% /columns %}}

### **🎯 Context Management Strategy**

**1. Project Rules Setup**

Create rule files in the `.amazonq/rules/` directory:

```markdown
# project-rules.md

## Coding Standards
- Use TypeScript instead of JavaScript
- Function names use camelCase
- Class names use PascalCase
- Constants use UPPER_CASE with underscores

## Project Conventions
- API response format uses { code, message, data }
- Error handling uses custom exception classes
- Database operations use Repository pattern
- Frontend state management uses Redux Toolkit
```

**2. File Reference Techniques**

```
Referring to the type definitions in @src/types/User.ts,
add new interface methods to @src/api/user.ts
```

```
Based on the test style of @tests/utils.test.js,
write tests for @src/services/auth.js
```

### **🔧 Agentic Coding Best Practices**

**1. Progressive Task Decomposition**

{{% columns %}}

**Break Down Large Tasks**
```
Step 1: Analyze the current project's authentication mechanism
Step 2: Design new permission system architecture
Step 3: Implement core permission check logic
Step 4: Update related API interfaces
Step 5: Write test cases
```

<--->

**Execute Specific Tasks**
```
Now execute step 1:
Analyze all files in the src/auth/ directory,
summarize the current authentication process and existing issues
```

{{% /columns %}}

**2. Safe Operation Confirmation**

```
Before modifying production configuration files,
please backup first and tell me what you want to modify
```

```
This operation will delete files,
please list the files to be deleted for my confirmation first
```

## **⚡ Efficient Workflows**

### **Daily Development Workflow**

1. **Project Analysis** → Let AI understand project structure and tech stack
2. **Requirements Clarification** → Describe in detail the functionality to implement
3. **Solution Design** → Have AI provide implementation approaches and architecture suggestions
4. **Code Implementation** → Gradually implement each module
5. **Test Validation** → Generate test cases and verify functionality
6. **Documentation Update** → Update related documentation and comments

### **Problem Solving Workflow**

1. **Problem Description** → Describe in detail the issue encountered and error messages
2. **Environment Information** → Provide relevant environment and configuration information
3. **Code Context** → Reference related code files
4. **Solution** → Get multiple solutions and choose the most suitable one
5. **Verification Test** → Verify the effectiveness of the solution
6. **Preventive Measures** → Learn how to avoid similar issues

## **🚀 Advanced Techniques**

### **Custom Prompt Templates**

Save frequently used prompt templates to `@Prompt`:

**Code Review Template**
```
Please conduct a comprehensive review of the following code:

1. Code quality and readability
2. Performance optimization suggestions
3. Security checks
4. Best practices compliance
5. Potential bug risks

Code:
[paste code here]
```

**API Design Template**
```
Design a RESTful API with the following requirements:

Function: [describe function]
Input parameters: [list parameters]
Output format: [describe return format]
Error handling: [error scenarios]
Performance requirements: [performance metrics]

Please provide:
1. API interface design
2. Data model definitions
3. Implementation code
4. Test cases
```

### **Team Collaboration Techniques**

**1. Unified Code Style**
```
Based on our team's .eslintrc.js configuration,
check and fix style issues in this code
```

**2. Code Review Assistance**
```
This is the code change from a Pull Request,
please help me review and provide improvement suggestions:
[paste git diff]
```

**3. Documentation Synchronization**
```
The code has been updated, please synchronize updates to:
- API documentation
- User manual
- Changelog
```

{{% hint warning %}}
**Note**: Although Amazon Q Developer is powerful, always maintain critical thinking and verify AI-generated code and suggestions, especially those involving security and business logic.
{{% /hint %}}
