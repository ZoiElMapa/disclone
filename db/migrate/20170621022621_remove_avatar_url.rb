class RemoveAvatarUrl < ActiveRecord::Migration
  def change
    remove_column :users, :avatar_url
  end
end
