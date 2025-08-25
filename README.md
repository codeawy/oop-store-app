# OOP Store App

A comprehensive TypeScript-based online store application demonstrating Object-Oriented Programming (OOP) principles.

## 🏗️ Architecture Overview

This project showcases a well-structured e-commerce system built with TypeScript, implementing key OOP concepts:

### Core Principles Demonstrated
- **Abstraction**: Abstract base classes with defined interfaces
- **Encapsulation**: Private/protected properties with controlled access
- **Inheritance**: Class hierarchies with method overriding
- **Polymorphism**: Different implementations of the same interface

## 📁 Project Structure

```
src/
├── models/           # Core domain models
│   ├── Product.ts    # Base product class
│   ├── PhysicalProduct.ts  # Physical product implementation
│   ├── DigitalProduct.ts   # Digital product implementation
│   ├── User.ts       # Abstract user base class
│   ├── Customer.ts   # Customer implementation
│   ├── Admin.ts      # Admin implementation
│   ├── Cart.ts       # Shopping cart management
│   ├── CartItem.ts   # Individual cart items
│   ├── Order.ts      # Order processing
│   └── index.ts      # Model exports
├── services/         # Business logic services
│   └── Store.ts      # Main store service
├── demo/             # Demonstration code
│   └── demonstration.ts  # OOP concepts showcase
└── index.ts          # Application entry point
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation Steps

#### 1. Install pnpm (if not already installed)
```bash
npm install -g pnpm
```

#### 2. Create project structure
```bash
# Create folders & files
mkdir -p src/models src/services src/docs && \
touch src/models/{Product.ts,DigitalProduct.ts,PhysicalProduct.ts,User.ts,Customer.ts,Admin.ts,Cart.ts,CartItem.ts,Order.ts,index.ts} \
      src/services/Store.ts \
      src/docs/users.ts \
      src/index.ts \
      README.md
```

#### 3. Initialize project
```bash
pnpm init
```

#### 4. Install TypeScript + Node.js types
```bash
pnpm add -D typescript @types/node
```

#### 5. Generate tsconfig.json
```bash
npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule --lib ESNext,DOM --module CommonJS --target ESNext --strict
```

### Development Commands

```bash
# Compile TypeScript
pnpm tsc

# Run the demonstration
node dist/demo/demonstration.js

# Watch mode for development
pnpm tsc --watch
```

## 📊 Demonstration Features

The included demonstration showcases:

1. **User Creation**: Admin and Customer registration
2. **Product Management**: Adding physical and digital products
3. **Shopping Experience**: Cart management and checkout
4. **Order Processing**: Complete order workflow
5. **Admin Functions**: Price updates and store management
6. **Statistics**: Store analytics and reporting
7. **Polymorphism**: Different product type behaviors

## 🎓 Learning Objectives

This project serves as a comprehensive example of:
- TypeScript class design and implementation
- OOP principles in practice
- Real-world application architecture
- Design patterns and best practices
- Type safety and error handling

## 📝 License

This project is created for educational purposes to demonstrate Object-Oriented Programming concepts in TypeScript.
