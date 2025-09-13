import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { VoiceToText } from "./VoiceToText";
import * as React from "react";

export class VoiceToTextControl implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private currentValue: string;

    constructor() {
        this.currentValue = "";
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const props = {
            value: context.parameters.value.raw || "",
            onChange: (newValue: string) => {
                this.currentValue = newValue;
                this.notifyOutputChanged();
            },
            disabled: context.mode.isControlDisabled
        };

        return React.createElement(
            VoiceToText, props
        );
    }

    public getOutputs(): IOutputs {
        return {
            value: this.currentValue
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
