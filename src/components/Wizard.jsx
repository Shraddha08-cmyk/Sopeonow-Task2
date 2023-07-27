import React from 'react';
import { Stepper, Step, StepLabel, Button, Box, StepIcon, withStyles } from '@material-ui/core';

const steps = ['Admission Request', 'Sent for IGL Approval', 'Received IGL Approval', 'Requested Bed Confirmation', 'Admitted', 'Accepted'];

const Wizard = () => {
    const [activeStepCount, setActiveStepCount] = React.useState(0);
    const [completionTimestamps, setCompletionTimestamps] = React.useState(Array(steps.length).fill(null));

    const handleStepNext = () => {
        if (activeStepCount === steps.length - 1) {
            completeStep(activeStepCount);
        }
        setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
    };

    const completeStep = (stepIndex) => {
        if (completionTimestamps[stepIndex] === null) {
            const newTimestamps = [...completionTimestamps];
            newTimestamps[stepIndex] = new Date();
            setCompletionTimestamps(newTimestamps);
        }
    };

    const handleStepReset = () => {
        setActiveStepCount(0);
        setCompletionTimestamps(Array(steps.length).fill(null));
    };

    return (
        <center
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '250%',
                }}
            >
                <Stepper
                    activeStep={activeStepCount}
                    style={{ width: '450px', textAlign: 'left' }}
                    orientation="vertical"
                >
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (completionTimestamps[index] !== null) {
                            stepProps.completed = true;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps} StepIconComponent={ColorStepIcon}>
                                    {label}
                                    {completionTimestamps[index] && (
                                        <div>Completed on: {completionTimestamps[index].toLocaleString()}</div>
                                    )}
                                </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStepCount === steps.length ? (
                    <div>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            pt: 4,
                        }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleStepReset}>
                                Reset
                            </Button>
                        </Box>
                    </div>
                ) : (
                    <div>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            pt: 2,
                        }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleStepNext}>
                                {activeStepCount === steps.length - 1 ? 'Done' : 'Next'}
                            </Button>
                        </Box>
                    </div>
                )}
            </div>
        </center>
    );
};

const ColorStepIcon = withStyles({
    root: {
        color: '#3AB748',
        '&$active': {
            color: '#3AB748',
        },
        '&$completed': {
            color: '#3AB748',
        },
    },
    active: {},
    completed: {},
})(StepIcon);

export default Wizard;
