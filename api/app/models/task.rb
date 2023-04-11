class Task < ApplicationRecord
    validates :title, presence: true
    belongs_to :team, foreign_key: true
end
