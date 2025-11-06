<script setup>
import MarkdownRender from '~/components/common/MarkdownRender.vue'

const testMarkdown = `# Syntax Highlighting Test

This is a test of the new markdown renderer with proper syntax highlighting.

## JavaScript Example

\`\`\`javascript
function greetUser(name) {
  const message = \`Hello, \${name}!\`;
  console.log(message);

  if (name === 'admin') {
    return { role: 'administrator', access: 'full' };
  }

  return { role: 'user', access: 'limited' };
}

// Call the function
const result = greetUser('John');
\`\`\`

## Python Example

\`\`\`python
def calculate_fibonacci(n):
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n

    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b

    return b

# Example usage
numbers = [calculate_fibonacci(i) for i in range(10)]
print(f"First 10 Fibonacci numbers: {numbers}")
\`\`\`

## HTML Example

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Page</title>
    <style>
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Site</h1>
        <p>This is a sample HTML page with <strong>bold text</strong> and <em>italic text</em>.</p>
    </div>
</body>
</html>
\`\`\`

## CSS Example

\`\`\`css
/* Modern CSS with custom properties */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --border-radius: 8px;
}

.card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .card {
    padding: 1rem;
  }
}
\`\`\`

## JSON Example

\`\`\`json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project configuration",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "nodemon": "^2.0.15",
    "jest": "^27.5.1"
  }
}
\`\`\`

## Bash Example

\`\`\`bash
#!/bin/bash

# Install dependencies
npm install

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"

    # Deploy to production
    echo "Deploying to production..."
    rsync -avz dist/ user@server:/var/www/html/
else
    echo "❌ Build failed!"
    exit 1
fi
\`\`\`

## Inline Code

You can also use inline code like \`const variable = 'value'\` or \`npm install package-name\`.

## Features

- ✅ Proper syntax highlighting for multiple languages
- ✅ Copy button functionality
- ✅ Dark theme that matches your design
- ✅ Responsive design
- ✅ Accessible contrast ratios
`
</script>

<template>
  <div class="container mx-auto p-8 max-w-4xl">
    <h1 class="text-3xl font-bold mb-8 text-white">Markdown Renderer Test</h1>
    <MarkdownRender :md="testMarkdown" />
  </div>
</template>

<style scoped>
.container {
  background: #0d1117;
  min-height: 100vh;
}
</style>
