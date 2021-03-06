import { Gutter } from "antd/lib/grid/row";
import { INotificationType } from "../interfaces/NotificationType.interface";

export const PATH_NAMES = {
  LOGIN: "/",
  HOME: "/home",
  LIBRARY: "/library",
  WILD_ROUTE: "/*",
};

export const DATABASE_TABLE_NAME: string = "shows";

export const CHILD_TYPE = {
  TRACK_URI: "trackUri",
  SPOTIFY_ID: "spotifyId",
};

export const NOTIFICATION_TYPE: INotificationType = {
  SUCCESS: "success",
  WARNING: "warning",
  INFO: "info",
  ERROR: "error",
};

export const MESSAGES = {
  ALREADY_IN_LIBRARY: "already in Library",
  SONG_ADDED_SUCCESS: "added to Library",
  ERROR: "An Error Occured",
  SONG_REMOVED_SUCCESS: "removed from Library",
  SIGN_OUT: "you are about to sign out of your account",
  HI: "Hi",
  PLAYLIST_EXPORT_SUCCESS: "Playlist Successfully Exported",
  NO_SONGS: "No Songs have been added to libarary",
  CANNOT_ADD_ALBUM: "is an album, only tracks can be added to the library",
  NOT_FOUND: "Albums were not found, please try again later",
};

export const TEXTS = {
  YES: "Yes",
  NO: "No",
  OK: "OK",
  SEARCH: "Search",
  DELETE: "Delete",
  FROM_LIBRARY: "from Library",
  PLAYLIST_NAME: "Music App Playlist",
  PLAYLIST_DESCRIPTION: "Playlist from music app",
  REMOVE: "Remove from",
  SAVE: "Save to",
  EXPORT: "Export",
  EXPORT_TO_MY_SPOTIFY: "Export to My Spotify",
};

export const SPOTIFY_IMAGE_URL_INDEX: number = 1;

export const SPOTIFY_SCOPES = {
  PLAYLIST_MODIFY_PRIVATE: "playlist-modify-private",
  PLAYLIST_MODIFY_PUBLIC: "playlist-modify-public",
};

export const SPOTIFY_BASE_URL: string = "https://api.spotify.com/v1/";

export const SPOTIFY_IMAGE_URL: string =
  "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png";

export const MUSIC_APP_TOKEN: string = "MUSIC_APP_TOKEN";

export const IMAGE_URL: string = "https://i.stack.imgur.com/34AD2.jpg";

export const MUSIC_APP_TOKEN_EXPIRY_TIME: string =
  "MUSIC_APP_TOKEN_EXPIRY_TIME";

export const SPOTIFY_URLS = {
  GET_USER: "me",
  NEW_RELEASES: "browse/new-releases?limit=4",
  SEARCH: "search?q=",
  SEARCH_TYPE: "&type=track",
  CREATE_PLAYLIST_USER: "users/",
  CREATE_PLAYLIST_PLAYLISTS: "/playlists",
  ADD_TO_PLAYLIST_PLAYLISTS: "playlists/",
  ADD_TO_PLATLIST_TRACK: "/tracks?uris=",
  GET_TRACK_FROM_ALBUM_ALBUMS: "albums/",
  GET_TRACK_FROM_ALBUM_TRACKS: "/tracks",
};

export const SMALL_SIZE_CONTENT_COLUMN_SPAN: number = 12;

export const LARGE_SIZE_CONTENT_COLUMN_SPAN: number = 6;

export const MY_LIBRARY_CONTENT_ROW_COLUMN_GUTTER: Gutter | [Gutter, Gutter] = [
  14, 12,
];

export const SMALL_SIZE_NEW_RELEASES_COLUMN_SPAN: number = 10;

export const LARGE_SIZE_NEW_RELEASES_COLUMN_SPAN: number = 5;

export const MY_LIBRARY_NEW_RELEASES_ROW_COLUMN_GUTTER:
  | Gutter
  | [Gutter, Gutter] = [14, 12];

export const IMAGE_ALT_TEXTS = {
  USER: "user",
  SPOTIFY_LOGO: "logo-spotify",
};

export const CLASS_NAMES = {
  CONTAINER: "container",
  AVATAR: "avatar",
  NEW_RELEASE_ROW: "new-release-row",
  CARD_IMAGE: "card-image",
  ICON_MARGIN_LEFT: "icon-margin-left",
  SEARCH: "search",
  LIST_ITEM_TITLE: "list-item-title",
  LIST_ITEM_NAME: "list-item-name",
  ICON_MARGIN_TOP: "icon-margin-top",
  LOGO: "logo",
  LOGIN_BTN: "login-btn",
  LOGIN_PAGE: "login-page",
  HEADER: "header",
  LIBRARY_TEXT: "library-text",
  LOGOUT: "logout",
  INFO: "info",
  HOME_HEADER: "home-header",
  NAME: "name",
  MINUS_ICON: "minus-icon",
};

export const ALBUM_TYPE = {
  ALBUM: "album",
  SINGLE: "single",
};
