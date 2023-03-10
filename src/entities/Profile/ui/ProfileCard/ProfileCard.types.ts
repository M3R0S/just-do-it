import { Profile } from "../../model/types/ProfileSchema";

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
}
