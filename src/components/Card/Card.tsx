import { SCardDiv, STitleDiv, SImgDiv, SLinkDiv } from './Card.styled'

type CardProps = {
    title: string
    source: string
    altName: string
    link: string
}

export const Card = ({ title, source, altName, link }: CardProps) => {
    return (
        <SCardDiv>
            <STitleDiv>{title}</STitleDiv>
            <SImgDiv>
                <img src={source} alt={altName} />
            </SImgDiv>
            <SLinkDiv>{link}</SLinkDiv>
        </SCardDiv>
    )
}
