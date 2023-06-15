import React from 'react';
import { Container, Grid, Image, Spacer } from "@nextui-org/react";
import BigFront from './BigFront';
import SmallFront from './SmallFront';
import myImageUrl from '../../../static/img/12178_color.png';

export default function HomepageFeatures(): JSX.Element {
    return (
        <section>
        <Container css={{ marginTop: "0px" }}>

            <Grid.Container gap={4} justify="center">
                <Grid md={6}>
                    <div>
                    <BigFront/>
                    <SmallFront/>
                    </div>
                </Grid>
                <Grid md={6}>
                    <div>
                    <Image   
                        showSkeleton
                        css={{ borderRadius: "15px", marginTop: "60px" }}
                        width={"80%"}  
                        src={myImageUrl}
                        alt="Default Image"
                    />
                    </div>
                </Grid>
            </Grid.Container>

            <Spacer y={1} />
    
        </Container>
        </section>
    );
}
