import * as RedditService from '../../../services/reddit-service';

function PostItem({ name, created, username, image }) {
    return (
        <div className="d-flex flex-column gap-3 align-items-center rounded-5 p-3" style={{backgroundColor: '#9b9b9b'}}>
            <div className="d-flex gap-5">
                <img className="rounded-circle" src={`${image ? image : 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80'}`} width={'100px'} height={'100px'} />
                <div>
                    <div>{username.slice(3, username.length)}</div>
                    <div>{created}</div>
                    <a href={RedditService.getRedditPostByUser(username)}><i className="fa fa-reddit fa-lg"></i></a>
                </div>
            </div>
            <div>{name}</div>
        </div>
    );
}

export default PostItem;