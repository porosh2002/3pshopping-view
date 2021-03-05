import React from 'react'
import {ModalBTN,Center, Modal,ModalChild,ModalContent} from '../../Styles/Styled'
export default function ModalC() {
    return (
        <Modal>
            <div className='ModalChild'>
                <ModalChild>
                    <Center>
                        <ModalContent>
                        Become a Contributor
                        </ModalContent>
                        <ModalBTN>Got it</ModalBTN>
                        </Center>
                    </ModalChild>
            </div>
        </Modal>
    )
}
