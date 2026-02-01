import loadingIcon from '../../../assets/icons/pacman.svg';

function Loading({ loading }) {
    return (
        <>
            {!loading && <div>
                            <img src={loadingIcon} alt="Loading..."/>
                        </div>}
        </>

    );
}

export default Loading;