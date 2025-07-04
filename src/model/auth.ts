export interface TClientCredentialTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface TAuthUrlParams {
  response_type: "code";
  client_id: string;
  scope: string;
  code_challenge_method: "S256";
  code_challenge: string;
  redirect_uri: string;
  show_dialog: boolean;
}

export interface TExchangTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}
