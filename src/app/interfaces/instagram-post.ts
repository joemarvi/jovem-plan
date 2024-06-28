export interface InstagramPost {
  id: number;
  media_url: string; // Adjusted to match API response
  caption: string;
  timestamp: Date; // Adjusted to match API response
  media_type: string;
  like_count: number;
  comments_count: number;
  // Add other properties as needed
}
