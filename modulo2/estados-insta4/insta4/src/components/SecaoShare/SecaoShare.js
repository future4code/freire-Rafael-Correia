import React, {Component} from 'react'
import styled from 'styled-components'
import faceIcon from '../../img/facebook_icon.png'
import instaIcon from '../../img/instagram_icon.png'
import twitterIcon from '../../img/twitter_icon.png'

const ShareContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px;
`

const InputShare = styled.textarea`
    width: 75%;
    margin-right: 5px;
    resize: none;
    padding: 0.5rem;
`

const RedeShare = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const RedeIcons = styled.img`
    width: 40px;
    height: 30px;
    margin: 0.5rem;
`

export class SecaoShare extends Component {
	state = {
		valorMensagem: ""
	}

	onChangeShare = (event) => {
		this.setState({
			valorMensagem: event.target.value
		})
	}
	
	render() {
		return (
            <ShareContainer>
                <InputShare
                    placeholder={'Mensagem'}
                    value={this.state.valorMensagem}
                    onChange={this.onChangeShare}
                />
                <RedeShare>
                    <RedeIcons src={faceIcon} onClick={this.props.aoEnviar} name="Facebook" alt={this.state.valorMensagem} />
                    <RedeIcons src={instaIcon} onClick={this.props.aoEnviar} name = "Instagram" alt={this.state.valorMensagem} />
                    <RedeIcons src={twitterIcon} onClick={this.props.aoEnviar}  name = "Twitter" alt={this.state.valorMensagem} />
                </RedeShare>
            </ShareContainer>
        )
	}
}