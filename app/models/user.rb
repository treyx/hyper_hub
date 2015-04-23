class User < ActiveRecord::Base
  def self.find_or_create_from_auth(data)
    user = User.find_or_create_by(provider: data.provider, uid: data.uid)

    user.name      = data.info.name
    user.email     = data.info.email
    user.token     = data.credentials.token
    user.image_url = data.info.image
    user.save
    user
  end

  def request_user
    Faraday.get "https://api.github.com/user/repos" do |request|
      request.params["access_token"] = token
      request.params["type"] = "public"
      request.headers["Accept"] = "application/vnd.github.moondragon+json"
    end
  end

  def public_repos
    @public_repos ||= JSON.parse(request_user.body, symbolize_names: true)
  end
end
