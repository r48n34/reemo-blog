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
                    letterSpacing: "3px",
                    textShadow: "0px 0px 6px rgba(255,255,255,0.7)"
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
                    marginTop: "-30px", letterSpacing: "3px",
                    textShadow: "0px 0px 6px rgba(255,255,255,0.7)"
                }}
                weight="bold"
            >
                Sleep
                
            </Text>

            <Tooltip content={"And coding maybe?"} contentColor="warning" color="white" placement="right"  css={undefined}>
            <Text
                hideIn={"xs"}
                h1 size={"20vh"}
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    marginTop: "-30px",
                    letterSpacing: "3px",
                    textShadow: "0px 0px 6px rgba(255,255,255,0.7)"
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
