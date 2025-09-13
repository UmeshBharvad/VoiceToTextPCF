# Quick Start Guide - Voice to Text PCF Control

## Author
Umesh Bharvad

## 🚀 Quick Setup (5 Minutes)

### Prerequisites Checklist
- [ ] Node.js installed
- [ ] .NET SDK 9.0+ installed
- [ ] Power Apps CLI installed
- [ ] Git installed
- [ ] Visual Studio Code (recommended)

### Quick Installation
```powershell
# 1. Clone the repository
git clone https://github.com/UmeshBharvad/VoiceToTextPCF.git
cd VoiceToTextPCF

# 2. Install dependencies
npm install

# 3. Build the control
npm run build

# 4. Build the solution
cd Solutions
dotnet build
```

## 🎯 Your First Contribution (10 Minutes)

### 1. Set Up Development Branch
```powershell
git checkout develop
git checkout -b feature/your-feature-name
```

### 2. Make Changes
1. Open in VS Code
2. Navigate to `VoiceToTextControl/VoiceToText.tsx`
3. Make your changes
4. Test locally

### 3. Submit Changes
```powershell
git add .
git commit -m "feat(scope): your change description"
git push origin feature/your-feature-name
```

### 4. Create Pull Request
1. Go to GitHub repository
2. Click "New Pull Request"
3. Select `develop` as base branch
4. Fill in the PR template

## 🔍 Quick Testing Guide

### Local Testing
```powershell
# Build and watch for changes
npm run build -- --watch

# Test in browser
npm start
```

### Browser Testing Checklist
- [ ] Chrome
- [ ] Edge
- [ ] Firefox
- [ ] Safari

### Feature Testing Checklist
- [ ] Microphone access works
- [ ] Voice recognition accurate
- [ ] Error messages clear
- [ ] UI responsive
- [ ] Accessibility features working

## 🎨 Common Customizations

### 1. Change Button Style
```css
/* In VoiceToText.css */
.mic-button {
    background-color: #your-color;
    /* Add your styles */
}
```

### 2. Add New Feature
```typescript
// In VoiceToText.tsx
const YourNewFeature = () => {
    // Your code here
};
```

### 3. Modify Error Handling
```typescript
// Add custom error handler
const handleError = (error: Error) => {
    // Your error handling
};
```

## 📝 Documentation Tips

### Adding Screenshots
1. Take screenshot
2. Save in `assets/screenshots/`
3. Update README.md:
   ```markdown
   ![Feature Name](assets/screenshots/your-screenshot.png)
   ```

### Updating Docs
1. Update relevant .md files
2. Follow markdown style guide
3. Include code examples
4. Add screenshots if needed

## ❓ Quick Help

### Common Issues
1. **Build Fails**
   ```powershell
   # Clear and reinstall
   rm -rf node_modules
   npm install
   ```

2. **Git Issues**
   ```powershell
   # Reset local changes
   git reset --hard origin/develop
   ```

3. **Test Environment**
   ```powershell
   # Start fresh test
   npm run clean
   npm run build
   ```

### Getting Help
- Create issue with `help wanted` label
- Join discussions
- Check documentation
- Contact maintainers

## 🔄 Development Cycle

1. **Plan**
   - Check issues
   - Read requirements
   - Plan approach

2. **Develop**
   - Write code
   - Follow standards
   - Add comments

3. **Test**
   - Local testing
   - Browser testing
   - Feature verification

4. **Submit**
   - Create PR
   - Request review
   - Address feedback

## 🎉 Next Steps

1. Join the community
2. Check open issues
3. Read full documentation
4. Start contributing!

Need more help? Check our [Detailed Documentation](./CONTRIBUTING.md)
