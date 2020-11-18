import React from 'react';
import {TennisDIV,TennisTitle,TennisTitleSub} from '../../Styled'
export default function TennisCard({data}) {
    return (
        <TennisDIV>
            <TennisTitle>To Win the Match Line</TennisTitle>
            <TennisTitleSub>{data.TS_T_A}</TennisTitleSub>
            <TennisTitleSub>{data.TS_T_B}</TennisTitleSub><br></br>
            <TennisTitleSub>{data.TS_T_A_R_F}</TennisTitleSub>
            <TennisTitleSub>{data.TS_T_B_R_F}</TennisTitleSub>
            <TennisTitle>Total Match Point</TennisTitle>
            <TennisTitleSub>{'Odd'}</TennisTitleSub>
            <TennisTitleSub>{'Even'}</TennisTitleSub><br></br>
            <TennisTitleSub>{data.TS_T_M_P_O}</TennisTitleSub>
            <TennisTitleSub>{data.TS_T_M_P_E}</TennisTitleSub>
            <TennisTitle>1st Game Total Point</TennisTitle>
            <TennisTitleSub>{'Over 18.5'}</TennisTitleSub>
            <TennisTitleSub>{'Under 18.5'}</TennisTitleSub><br></br>
            <TennisTitleSub>{data.TS_T_M_P_O_18}</TennisTitleSub>
            <TennisTitleSub>{data.TS_T_M_P_U_18}</TennisTitleSub>
        </TennisDIV>
    )
}
