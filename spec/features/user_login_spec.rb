require "rails_helper"
OmniAuth.config.test_mode = true

RSpec.feature "User login", type: :feature do
  xscenario "should be able to login with GitHub Omniauth" do
    visit root_path
    mock_omniauth_user
    click_link_or_button "Login"
    expect(current_path).to eq(dashboard_path)
  end
end

private

def mock_omniauth_user
  OmniAuth.config.mock_auth[:github] = OmniAuth::AuthHash.new({
    "provider" => "github",
    "uid"      => "123456",
    "info" => {
      "nickname" =>  "mock_user",
      "image"    => "mock_user_thumbnail_url"
    },
    "credentials" => {
      "token"  => "mock_token"
    }
  })
end
