# Voice to Text PCF Control

A Power Apps Component Framework (PCF) control that enables voice-to-text functionality in Power Apps using the Web Speech API.

## Author
Umesh Bharvad

## Visual Guide

### Control States
![Initial State](assets/screenshots/initial-state.png)
*Default state of the Voice to Text control*

![Recording State](assets/screenshots/recording-state.png)
*Control actively recording voice input*

![Error State](assets/screenshots/error-state.png)
*Error handling and user feedback*

### Implementation Steps
![Adding the Control](assets/screenshots/power-apps-add-control.png)
*Adding the Voice to Text control to a form*

![Configuration](assets/screenshots/power-apps-configure.png)
*Configuring the control properties*

![Field Binding](assets/screenshots/power-apps-field-binding.png)
*Binding the control to a text field*

## Available Solutions

### Managed Solution (Production Ready)
- Location: `Solutions/bin/Release/Solutions.zip`
- Type: Managed
- Use Case: Production environments
- Features: All dependencies included and managed

### Unmanaged Solution (Development)
- Location: `Solutions/bin/Debug/Solutions.zip`
- Type: Unmanaged
- Use Case: Development and testing environments
- Features: Customizable and modifiable

## Created
September 13, 2025

## Description
This PCF control provides a user-friendly interface for converting speech to text in real-time within Power Apps. It uses the browser's built-in Web Speech API to capture voice input and convert it to text, making it ideal for hands-free data entry scenarios.

## Features
- Real-time voice-to-text conversion
- Visual feedback during recording
- Support for continuous recording
- Error handling and graceful degradation
- Accessible UI with ARIA labels
- Responsive design
- Supports both manual text input and voice input

## Requirements
- Power Apps environment
- Modern web browser with Web Speech API support (Chrome, Edge, Safari, Firefox)
- Power Apps CLI version 1.35.1 or higher
- .NET SDK version 9.0 or higher

## Installation

### From Solution File
1. Download the solution file (`Solutions.zip`) from the `Solutions/bin/Debug` directory
2. Open the Power Platform Admin Center
3. Navigate to Solutions
4. Click "Import"
5. Select the downloaded solution file
6. Follow the import wizard steps

### Building from Source
1. Clone the repository
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Build the control:
   ```powershell
   npm run build
   ```
4. Build the solution:
   ```powershell
   cd Solutions
   dotnet build
   ```

## Usage

### In Power Apps
1. Add a text field to your form or view
2. In the field's properties, locate the "Controls" tab
3. Add the "Voice to Text Control" to the field
4. The control will now be available for voice input

### Features
- Click "Start Recording" to begin voice input
- Speak clearly into your microphone
- Text appears in real-time as you speak
- Click "Stop Recording" to finish
- You can also manually edit the text if needed
- The control respects the field's disabled state

## Development

### Project Structure
```
VoiceToText/
├── VoiceToTextControl/
│   ├── css/
│   │   └── VoiceToText.css
│   ├── types/
│   │   └── speech-recognition.d.ts
│   ├── ControlManifest.Input.xml
│   ├── index.ts
│   └── VoiceToText.tsx
├── Solutions/
│   └── [Solution files]
├── package.json
└── tsconfig.json
```

### Key Components
1. `VoiceToText.tsx` - Main React component implementing the voice-to-text functionality
2. `index.ts` - PCF control implementation
3. `speech-recognition.d.ts` - TypeScript definitions for Web Speech API
4. `VoiceToText.css` - Styles for the control

### Building
- `npm run build` - Builds the PCF control
- `dotnet build` (in Solutions directory) - Builds the solution package

## Troubleshooting

### Common Issues
1. **Microphone Access**
   - Ensure the browser has permission to access the microphone
   - Check browser settings if the permission prompt doesn't appear

2. **Browser Support**
   - Verify that your browser supports the Web Speech API
   - Use a modern browser version for best compatibility

3. **No Audio Input**
   - Check if the correct microphone is selected in your system settings
   - Verify that the microphone is working in other applications

### Error Messages
- "Speech recognition error" - Check microphone permissions and connectivity
- "Speech recognition not supported" - Use a compatible browser

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
This project is licensed under the MIT License.

## Support
For support or feature requests, please open an issue in the repository.
