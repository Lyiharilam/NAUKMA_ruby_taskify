class CreateTeamMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :team_members do |t|
      t.string :role
      t.belongs_to :team, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end
