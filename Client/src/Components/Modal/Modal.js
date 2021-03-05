import React from 'react'
import {ModalBTN,Center, Modal,ModalChild,ModalContent} from '../../Styles/Styled'
export default function ModalC({Text,ModalClick}) {
    return (
        <Modal>
            <div className='ModalChild'>
                <ModalChild>
                    <Center>
                        <ModalContent>
                        {Text}
                        </ModalContent>
                        <ModalBTN onClick={ModalClick}>Got it</ModalBTN>
                        </Center>
                    </ModalChild>
            </div>
        </Modal>
    )
}
