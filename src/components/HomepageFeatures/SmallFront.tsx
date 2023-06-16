import React from 'react';
import { Text } from "@nextui-org/react";

function SmallFront() {
    return (
        <>
            <Text
                showIn={"xs"}
                h1 size={"5em"}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                Eat
            </Text>

            <Text
                showIn={"xs"}
                h1 size={"5em"}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    marginTop: "-15px",
                }}
                weight="bold"
            >
                Sleep
            </Text>

            <Text
                showIn={"xs"}
                h1 size={"5em"}
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
            >
                Code
            </Text>
        </>
    )
}

export default SmallFront
