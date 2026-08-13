import "./loading.scss"

function Loading() {
    return (
        <div className="intersecting-circles-spinner">
            <div className="spinnerBlock">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
            </div>
        </div>
    )
}

export default Loading