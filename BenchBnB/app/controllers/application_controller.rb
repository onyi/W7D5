class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?


  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logged_in?
    !!current_user
  end

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

end
