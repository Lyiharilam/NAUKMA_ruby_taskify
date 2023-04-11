class CreateTeamMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :team_members do |t|
      t.string :role
      t.integer :user_id
      t.integer :team_id
      t.timestamps
    end
  end
end
