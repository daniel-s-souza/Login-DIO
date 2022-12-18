import React from 'react';
import Header from "../../components/header";
import Card from "../../components/card";
import { Column, StyledFeed, Title, TitleHighlight } from "./styles";
import UserRanking from "../../components/ranking";

const Feed = () => {
	return (
		<>
			<Header autenticado={true}/>
			<StyledFeed>
				<Column flex={2}>
                    <Title>#FEED</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>

                <Column flex={1}>
                    <TitleHighlight>#Ranking da Semana</TitleHighlight>
                    <UserRanking name="Daniel Souza 1" image="https://avatars.githubusercontent.com/u/88973212?s=400&u=7e58326752f7f4495ecfcd629526fc22754e07d0&v=4" percentual={80}/>
                    <UserRanking name="Daniel Souza 2" image="https://avatars.githubusercontent.com/u/88973212?s=400&u=7e58326752f7f4495ecfcd629526fc22754e07d0&v=4" percentual={30}/>
                    <UserRanking name="Daniel Souza 3" image="https://avatars.githubusercontent.com/u/88973212?s=400&u=7e58326752f7f4495ecfcd629526fc22754e07d0&v=4" percentual={50}/>
                    <UserRanking name="Daniel Souza 4" image="https://avatars.githubusercontent.com/u/88973212?s=400&u=7e58326752f7f4495ecfcd629526fc22754e07d0&v=4" percentual={50}/>
                    <UserRanking name="Daniel Souza 5" image="https://avatars.githubusercontent.com/u/88973212?s=400&u=7e58326752f7f4495ecfcd629526fc22754e07d0&v=4" percentual={95}/>
                </Column>
			</StyledFeed>
		</>
	);
};

export default Feed;