import { Comment } from "../../model/types/comment";

export interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}
