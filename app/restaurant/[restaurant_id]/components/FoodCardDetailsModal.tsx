import CommonModal from '@app/components/modal/ComonModal'
import React from 'react'

const FoodCardDetailsModal = ({isModal, setModal}) => {


    return (
        <div>
            <CommonModal
              open={isModal}
                setOpen={setModal}
                title='Food Details'
                content={<div>Food Details</div>}
            />
        </div>
    )
}

export default FoodCardDetailsModal