import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { ModalSetting } from "../../"
import baseStyle from '../../../styles'
import styles from './styles'
import { Location } from '../../../types/locations'
import {Images} from "../../../Components";

type MyInformationProps = {
  location: Location
  handleClick: () => void
  closeWindow: boolean
}

export const Information: React.FC<MyInformationProps> = ({ location, handleClick, closeWindow }) => {
  const { cover, linkToPost, small_text, title } = location
  const viewWindow = closeWindow ? css(styles.wrapper, styles.closedWindow) : css(styles.wrapper)

  return <div className={ viewWindow }>
    <div className={ css(styles.blockImg) }>
      <Images styles={ styles.cover } link={ cover } alt={ title } height={ 100 } width={ 100 } />
    </div>
    <div className={ css(styles.block, baseStyle.flexSB) }>
      <FontAwesomeIcon onClick={ handleClick } className={ css(styles.icon) } icon={ faArrowLeft }/>
      <p className={ css(styles.title) }>{ title }</p>
      <ModalSetting mapInformation={ true } />
    </div>
    <div className={ css(styles.blockText) }>
      <p className={ css(styles.text) }>{ small_text }</p>
    </div>
    { linkToPost.length !== 0 ? <div className={ css(styles.blockText) }>
      <p className={ css(styles.textInfo) }>Більше про { title } можете подивитись тут:</p>
      <Link href={`/post/[id]`} as={ `/post/${ linkToPost }` }>
        <a><span className={css(styles.link)}>{ title }</span></a>
      </Link>
    </div> : null
    }
  </div>
}