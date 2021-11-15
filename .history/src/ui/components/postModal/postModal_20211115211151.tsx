import React from "react";

const postModal = () => {
    return(
        <div>
        {isModal && (
            <div className={m.background}>
                <div className={m.container}>
                    <div className={m.CloseBtn}>
                        <button className={m.titleCloseBtn} onClick={() => closeModal(false)}> <i className="far fa-times-circle"></i> </button>
                    </div>
                    <div className={m.title}>
                        <h1>Upload a photo</h1>
                    </div>
                    <div className={m.body}>
                        <div className={m.fileblock}>
                            {file ? (
                                <img src={file} alt="" onClick={() => setFile(null)} />
                            ) : (
                                <div>
                                    <input
                                        ref={uploadfile}
                                        type="file"
                                        onChange={addPostImg}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={m.footer}>
                            <div className={m.descriptionblock}>
                                <input
                                    type="text"
                                    ref={descriptionRef}
                                    placeholder="Enter description of post..."
                                />
                                <div>
                                <button 
                                type="button"
                                onClick={ () => uploadPost}
                                disabled={!file}
                                >
                                Upload Post
                                </button>
                                <h4>Uploaded {prog}%</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )}
    </div>
    )
}
export default postModal;