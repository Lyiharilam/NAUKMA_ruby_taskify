class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.string :deadline
      t.string :status
      t.belongs_to :team, foreign_key: true
      t.timestamps
    end
  end
end
