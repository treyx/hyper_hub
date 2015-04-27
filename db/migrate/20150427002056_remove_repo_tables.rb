class RemoveRepoTables < ActiveRecord::Migration
  def change
    drop_table :repos
    drop_table :repositories
  end
end
