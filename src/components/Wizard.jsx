import React from 'react';
import { Stepper, Step, StepLabel, Button, Box, StepIcon, withStyles } from '@material-ui/core';
import { PermContactCalendarOutlined } from '@material-ui/icons';

const steps = ['Admission Request', 'Sent for IGL Approval', 'Received IGL Approval', 'Requested Bed Confirmation', 'Admitted', 'Accepted'];
const doctors = ['Dr. Smith', 'Dr. Johnson']; // Add your doctor names here

const Wizard = () => {
    const [activeStepCount, setActiveStepCount] = React.useState(0);
    const [timestamps, setTimestamps] = React.useState(Array(steps.length).fill(null));

    const handleStepNext = () => {
        if (activeStepCount < steps.length - 1) {
            const newTimestamps = [...timestamps];
            newTimestamps[activeStepCount] = new Date().toLocaleString();
            setTimestamps(newTimestamps);
        }
        setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
    };

    const handleStepReset = () => {
        setActiveStepCount(0);
        setTimestamps(Array(steps.length).fill(null));
    };

    const getDoctorName = (stepIndex) => {
        if (doctors.length > 0) {
            const doctorIndex = stepIndex < doctors.length ? stepIndex : doctors.length - 1;
            return doctors[doctorIndex];
        }
        return 'No doctor found';
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
                        if (timestamps[index] !== null) {
                            stepProps.completed = true;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps} StepIconComponent={ColorStepIcon}>
                                    {label}
                                    <div><PermContactCalendarOutlined style={{ color: "#3762A4" }} /> {getDoctorName(index)}</div>
                                    {timestamps[index] && (
                                        <div>Completed on: {timestamps[index]}</div>
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
