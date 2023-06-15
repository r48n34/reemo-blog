import React from 'react';
import { Text, Tooltip, Loading, Progress } from "@nextui-org/react";

function BigFront() {
    return (
        <>
            <Text
                hideIn={"xs"}
                h1 size={"20vh"}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    letterSpacing: "3px"
                }}
                weight="bold"
            >
                Eat
                {/* <Loading size="xl"/> */}
            </Text>

            <Text
                hideIn={"xs"}
                h1 size={"20vh"}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    marginTop: "-65px", letterSpacing: "3px"
                }}
                weight="bold"
            >
                Sleep
                <Progress
                    indeterminated
                    value={50} size="sm"
                    color="warning"
                    status="warning"
                />
            </Text>

            <Tooltip content={"And coding maybe?"} contentColor="warning" color="white" placement="right"  css={undefined}>
            <Text
                hideIn={"xs"}
                h1 size={"20vh"}
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    marginTop: "-50px",
                    letterSpacing: "3px"
                }}
                weight="bold"
            >
                Repeat
            </Text>
            </Tooltip>
        </>
    )
}

export default BigFront
