# Screenshots Guide for Voice to Text PCF Control

## Author
Umesh Bharvad

## Required Screenshots

Place the following screenshots in the `assets/screenshots` directory:

### 1. Control States
1. `initial-state.png`
   - Shows the control in its default state
   - Should display the text area and recording button
   - Capture at standard desktop resolution (1920x1080)

2. `recording-state.png`
   - Shows the control during active recording
   - Should show the pulsing red button and recording indicator
   - Include the status message "Recording in progress..."

3. `error-state.png`
   - Shows the control when microphone access is denied
   - Should display the error message and disabled button
   - Include the help text for troubleshooting

### 2. Implementation Steps
1. `power-apps-add-control.png`
   - Screenshot of adding the control in Power Apps
   - Show the control selection dialog
   - Highlight the Voice to Text control

2. `power-apps-configure.png`
   - Screenshot of control configuration
   - Show the properties panel
   - Highlight important settings

3. `power-apps-field-binding.png`
   - Screenshot showing field binding
   - Demonstrate how to bind to a text field
   - Show the binding configuration

### 3. Features
1. `accessibility-features.png`
   - Show high contrast mode
   - Demonstrate ARIA labels in dev tools
   - Show keyboard focus indicators

2. `responsive-mobile.png`
   - Show control on mobile resolution
   - Demonstrate responsive layout
   - Include touch interface elements

3. `error-handling.png`
   - Show various error states
   - Include browser compatibility warning
   - Show microphone permission dialog

## Screenshot Requirements

1. **Resolution**
   - Desktop: 1920x1080
   - Mobile: 375x812 (iPhone X)
   - High DPI displays: Use 2x scaling

2. **Format**
   - Format: PNG
   - Quality: 80% or higher
   - Max file size: 500KB

3. **Style Guidelines**
   - Use light theme
   - Clear, focused screenshots
   - Include context when relevant
   - Highlight important elements
   - Use consistent window sizes

## Adding Screenshots to Documentation

### In README.md
```markdown
## Visual Guide

### Control States
![Initial State](assets/screenshots/initial-state.png)
*Default state of the Voice to Text control*

![Recording State](assets/screenshots/recording-state.png)
*Control actively recording voice input*

### Implementation
![Adding the Control](assets/screenshots/power-apps-add-control.png)
*Adding the Voice to Text control to a form*
```

### In HOW-TO-USE.md
```markdown
## Installation Steps

1. Add the control to your form:
   ![Add Control](assets/screenshots/power-apps-add-control.png)

2. Configure the control:
   ![Configure](assets/screenshots/power-apps-configure.png)

3. Bind to a text field:
   ![Field Binding](assets/screenshots/power-apps-field-binding.png)
```

## Screenshot Naming Convention

Use the following format for screenshot filenames:
- `feature-state-context.png`
- Examples:
  - `control-initial-desktop.png`
  - `control-recording-mobile.png`
  - `setup-binding-highlight.png`

## Screenshot Checklist

Before adding screenshots:
- [ ] Verify all personal/sensitive information is removed
- [ ] Check image quality and resolution
- [ ] Ensure file size is optimized
- [ ] Validate accessibility features are visible
- [ ] Confirm screenshots are current with latest version
- [ ] Test all image links in documentation

## Taking High-Quality Screenshots

1. **Preparation**
   - Use a clean test environment
   - Set up proper window sizing
   - Clear any test data
   - Use consistent styling

2. **Capture Tools**
   - Windows: Snipping Tool or Win+Shift+S
   - macOS: Cmd+Shift+4 or Cmd+Shift+5
   - Browser Dev Tools for responsive views

3. **Post-Processing**
   - Crop to relevant content
   - Add highlights if needed
   - Optimize file size
   - Maintain aspect ratio

## Note to Contributors

When contributing screenshots:
1. Follow the naming convention
2. Place files in `assets/screenshots`
3. Update documentation references
4. Test all image links
5. Verify image quality and size
6. Include alt text for accessibility

## Screenshot Update Process

1. **When to Update Screenshots**
   - Major UI changes
   - New features added
   - Version updates
   - Documentation revisions

2. **Update Steps**
   - Create new screenshots
   - Replace old files
   - Update documentation references
   - Verify all links work
   - Test in different viewers

3. **Version Control**
   - Keep screenshot versions in sync with releases
   - Document screenshot updates in CHANGELOG.md
   - Archive old screenshots if needed
