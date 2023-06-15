import React from 'react';
import { Text } from "@nextui-org/react";

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
            </Text>

            <Text
                hideIn={"xs"}
                h1 size={"20vh"}
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    marginTop: "-65px",
                    letterSpacing: "3px"
                }}
                weight="bold"
            >
                Recycle
            </Text>
        </>
    )
}

export default BigFront
