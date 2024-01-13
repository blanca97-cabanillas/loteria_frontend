import { FC } from "react";
import Content from './Content';
import { NotificationContainer } from 'react-notifications';
import TopBar from "./topBar";
import FooterLoteria from "./footer";

interface Props {

}
export const IndexLayout: FC<Props> = ({ }) => {
    return (
        <>
            <div>
                <TopBar></TopBar>
                <Content />
                <FooterLoteria></FooterLoteria>
            </div>
            <NotificationContainer />
        </>
    )

}