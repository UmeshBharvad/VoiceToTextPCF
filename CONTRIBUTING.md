# Contributing to Voice to Text PCF Control

## Author
Umesh Bharvad

## Development Workflow

### Branch Structure
```
master (main)
└── develop
    ├── feature/feature-name
    ├── bugfix/bug-description
    └── enhancement/enhancement-name
```

### Branch Naming Convention
- `feature/*` - For new features
- `bugfix/*` - For bug fixes
- `enhancement/*` - For improvements to existing features
- `docs/*` - For documentation updates
- `refactor/*` - For code refactoring

Examples:
- `feature/multi-language-support`
- `bugfix/microphone-permission-issue`
- `enhancement/ui-improvements`

### Development Process

1. **Setting Up Development Environment**
   ```powershell
   # Clone the repository
   git clone https://github.com/UmeshBharvad/VoiceToTextPCF.git
   cd VoiceToTextPCF

   # Install dependencies
   npm install

   # Create a new feature branch from develop
   git checkout develop
   git checkout -b feature/your-feature-name
   ```

2. **Development Guidelines**
   - Follow TypeScript best practices
   - Maintain consistent code style
   - Add comments for complex logic
   - Update documentation as needed
   - Write meaningful commit messages

3. **Local Testing**
   ```powershell
   # Build the control
   npm run build

   # Build the solution
   cd Solutions
   dotnet build
   ```

4. **Commit Guidelines**
   Format: `type(scope): description`
   
   Types:
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation changes
   - `style`: Formatting, missing semi-colons, etc.
   - `refactor`: Code refactoring
   - `test`: Adding tests
   - `chore`: Maintenance tasks

   Example:
   ```
   feat(voice): add multi-language support
   fix(ui): resolve microphone button alignment
   docs(readme): update installation steps
   ```

### Pull Request Process

1. **Before Creating PR**
   - Update your branch with develop
   ```powershell
   git checkout develop
   git pull
   git checkout your-branch
   git rebase develop
   ```
   - Test your changes
   - Update documentation
   - Update version numbers if needed

2. **Creating Pull Request**
   - Use the PR template
   - Link related issues
   - Add meaningful description
   - Add screenshots if UI changes
   - Request reviews from maintainers

3. **PR Checklist**
   - [ ] Code follows project style
   - [ ] Tests added/updated
   - [ ] Documentation updated
   - [ ] Version numbers updated
   - [ ] Screenshots added (if applicable)
   - [ ] Browser testing completed

### Testing Requirements

1. **Browser Testing**
   - Chrome (latest)
   - Edge (latest)
   - Safari (latest)
   - Firefox (latest)

2. **Feature Testing**
   - Microphone permissions
   - Voice recognition accuracy
   - Error handling
   - UI responsiveness
   - Accessibility features

3. **Test Environments**
   - Local development
   - Power Apps Test environment
   - Production environment (final testing)

### Documentation Updates

1. **Required Documentation**
   - Update README.md
   - Update CHANGELOG.md
   - Update implementation details
   - Update screenshots if needed

2. **Version Updates**
   - Update package.json
   - Update solution version
   - Update documentation version references

### Release Process

1. **Preparing Release**
   ```powershell
   # Merge develop into master
   git checkout master
   git merge develop
   
   # Tag the release
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

2. **Release Checklist**
   - [ ] All tests passing
   - [ ] Documentation updated
   - [ ] Version numbers updated
   - [ ] CHANGELOG.md updated
   - [ ] Release notes prepared
   - [ ] Solutions built (managed and unmanaged)

### Continuous Integration

1. **Pre-commit Checks**
   - Code formatting
   - TypeScript compilation
   - Linting rules
   - Type checking

2. **PR Checks**
   - Build verification
   - Test execution
   - Documentation validation
   - Version number validation

### Support and Communication

1. **Getting Help**
   - Create an issue for bugs
   - Use discussions for questions
   - Tag maintainers when needed
   - Join the community discussions

2. **Issue Guidelines**
   - Use issue templates
   - Provide clear reproduction steps
   - Include environment details
   - Add screenshots if possible

### Code Style Guide

1. **TypeScript Guidelines**
   - Use TypeScript strict mode
   - Proper type definitions
   - Meaningful variable names
   - Clear function signatures

2. **React Guidelines**
   - Functional components
   - Hooks for state management
   - Props interface definitions
   - Proper event handling

3. **CSS Guidelines**
   - BEM naming convention
   - Responsive design
   - Accessibility considerations
   - Browser compatibility

### Performance Considerations

1. **Code Optimization**
   - Minimize re-renders
   - Optimize event handlers
   - Clean up event listeners
   - Memory leak prevention

2. **Bundle Size**
   - Minimize dependencies
   - Code splitting when needed
   - Asset optimization
   - Tree shaking

### Security Guidelines

1. **Code Security**
   - No sensitive data in code
   - Secure API handling
   - Input validation
   - XSS prevention

2. **Permission Handling**
   - Proper microphone access
   - User consent handling
   - Error state management
   - Secure data handling

### Community Guidelines

1. **Code of Conduct**
   - Be respectful
   - Constructive feedback
   - Inclusive language
   - Professional conduct

2. **Recognition**
   - Credit contributors
   - Acknowledge help
   - Share knowledge
   - Support new contributors

## Questions?
Feel free to reach out to maintainers or create an issue for any questions about the contribution process.
