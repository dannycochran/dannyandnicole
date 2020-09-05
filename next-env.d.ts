/// <reference types="next" />
/// <reference types="next/types/global" />

/* eslint-disable camelcase */

declare module 'instagram-web-api' {
  export interface PageInfo {
    has_next_page: boolean;
    end_cursor: string;
  }

  export interface Dimensions {
    height: number;
    width: number;
  }

  export interface DisplayResource {
    src: string;
    config_width: number;
    config_height: number;
  }

  export interface User2 {
    username: string;
    id: string;
  }

  export interface Node2 {
    user: User2;
    x: number;
    y: number;
  }

  export interface Edge2 {
    node: Node2;
  }

  export interface EdgeMediaToTaggedUser {
    edges: Edge2[];
  }

  export interface DashInfo {
    is_dash_eligible: boolean;
    video_dash_manifest: string;
    number_of_qualities: number;
  }

  export interface Node3 {
    text: string;
  }

  export interface Edge3 {
    node: Node3;
  }

  export interface EdgeMediaToCaption {
    edges: Edge3[];
  }

  export interface PageInfo2 {
    has_next_page: boolean;
    end_cursor?: any;
  }

  export interface Owner {
    id: string;
    profile_pic_url: string;
    username: string;
  }

  export interface Node4 {
    id: string;
    text: string;
    created_at: number;
    owner: Owner;
  }

  export interface Edge4 {
    node: Node4;
  }

  export interface EdgeMediaToComment {
    count: number;
    page_info: PageInfo2;
    edges: Edge4[];
  }

  export interface EdgeMediaPreviewLike {
    count: number;
  }

  export interface Owner2 {
    id: string;
  }

  export interface ThumbnailResource {
    src: string;
    config_width: number;
    config_height: number;
  }

  export interface Dimensions2 {
    height: number;
    width: number;
  }

  export interface DisplayResource2 {
    src: string;
    config_width: number;
    config_height: number;
  }

  export interface User3 {
    username: string;
    id: string;
  }

  export interface Node6 {
    user: User3;
    x: number;
    y: number;
  }

  export interface Edge6 {
    node: Node6;
  }

  export interface EdgeMediaToTaggedUser2 {
    edges: Edge6[];
  }

  export interface DashInfo2 {
    is_dash_eligible: boolean;
    video_dash_manifest: string;
    number_of_qualities: number;
  }

  export interface Node5 {
    __typename: string;
    id: string;
    dimensions: Dimensions2;
    display_url: string;
    display_resources: DisplayResource2[];
    is_video: boolean;
    should_log_client_event: boolean;
    tracking_token: string;
    edge_media_to_tagged_user: EdgeMediaToTaggedUser2;
    dash_info: DashInfo2;
    video_url: string;
    video_view_count?: number;
  }

  export interface Edge5 {
    node: Node5;
  }

  export interface EdgeSidecarToChildren {
    edges: Edge5[];
  }

  export interface Node {
    __typename: string;
    id: string;
    dimensions: Dimensions;
    display_url: string;
    display_resources: DisplayResource[];
    is_video: boolean;
    should_log_client_event: boolean;
    tracking_token: string;
    edge_media_to_tagged_user: EdgeMediaToTaggedUser;
    dash_info: DashInfo;
    video_url: string;
    video_view_count: number;
    edge_media_to_caption: EdgeMediaToCaption;
    shortcode: string;
    edge_media_to_comment: EdgeMediaToComment;
    comments_disabled: boolean;
    taken_at_timestamp: number;
    edge_media_preview_like: EdgeMediaPreviewLike;
    gating_info?: any;
    media_preview: string;
    owner: Owner2;
    thumbnail_src: string;
    thumbnail_resources: ThumbnailResource[];
    edge_sidecar_to_children: EdgeSidecarToChildren;
  }

  export interface Edge {
    node: Node;
  }

  export interface EdgeOwnerToTimelineMedia {
    count: number;
    page_info: PageInfo;
    edges: Edge[];
  }

  export interface User {
    edge_owner_to_timeline_media: EdgeOwnerToTimelineMedia;
  }

  export interface PhotosByUsername {
    user: User;
  }

  export interface PhotosByUsernameResponse {
    data: PhotosByUsername;
  }

  export interface InstagramParams {
    username: string;
    password: string;
  }

  export interface GetPhotosByUsernameOptions {
    username: string;
    first: number;
    after?: string;
  }

  class Instagram {
    constructor(params: InstagramParams);

    login(): Promise<void>;

    getPhotosByUsername(options: GetPhotosByUsernameOptions): Promise<PhotosByUsernameResponse>;
  }

  export default Instagram;
}
