import React, { useRef } from 'react';

const TableFormat = ({ table, totalData, totalScore, handleData }) => {
    const modalRef = useRef(null);

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    return (
        <div>
            {
                table === true ?
                    <>
                        <div className="overflow-x-auto w-2/3 mx-auto my-8">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className='bg-[#88619A] text-white text-center'>
                                        <th className='border'>Name</th>
                                        <th className='border'>Score</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        totalData.map((t, index) => <tr key={index}>
                                            <th className='text-start border px-3 py-2'>{t.Name}</th>
                                            <th className='border px-3 py-2'>{t.Score}</th>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>

                        <div className='my-9 text-center'>
                            <h1 className='font-bold text-2xl text-lime-500'> Total Score : {totalScore} </h1>
                        </div>

                        <div className='flex justify-center my-16 gap-20'>
                            {/* save results */}
                            <button className='btn btn-success'
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                            > Save My Results </button>

                            {/* share results */}
                            <button className='btn btn-error'> Share My Results </button>
                        </div>

                        {/* modal part */}
                        <dialog id="my_modal_3" className="modal" ref={modalRef}>
                            <div className="modal-box">

                                <h3 className="font-bold text-lg"> Save Results ! </h3>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    onClick={closeModal}
                                >✕</button>

                                <form onSubmit={handleData}>
                                    {/* if there is a button in form, it will close the modal */}
                                    <input type="text" name='userName' placeholder='Enter Your Name' className='w-full input input-info my-7' required />

                                    <input type="email" name='userEmail' placeholder='Enter Your Email' className='w-full input input-info' required />

                                    <input type="submit" className='btn btn-success mt-8' value="Save"/> 

                                </form>

                            </div>
                        </dialog>

                    </>
                    :

                    <></>
            }
        </div>
    );
};

export default TableFormat;