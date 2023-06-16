import React from 'react';
import { Container, Grid, Image, Spacer, Badge, NextUIProvider } from "@nextui-org/react";
import BigFront from './BigFront';
import SmallFront from './SmallFront';
import myImageUrl from '../../../static/img/12178_color.png';

export default function HomepageFeatures(): JSX.Element {
    return (
        
        <section
            style={{
                position: "relative",
            }}
            className='my-css-bg'
        >

        <Container css={{ marginTop: "0px" }} >

            <Grid.Container gap={4} justify="center">
                <Grid md={6}>
                    <div>
                    <BigFront/>
                    <SmallFront/>
                    </div>
                </Grid>
                <Grid md={6}>
                    <div>
                    {/* <Badge color="primary">New</Badge> */}
                    <Image
                        
                        showSkeleton
                        css={{ borderRadius: "15px", marginTop: "60px" }}
                        width={"85%"}  
                        src={myImageUrl}
                        alt="Default Image"
                    />
                    </div>
                </Grid>
            </Grid.Container>

            <Spacer y={2} />
        
        </Container>
        </section>
        // </NextUIProvider>
    );
}
