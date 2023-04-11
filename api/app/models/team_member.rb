class TeamMember < ApplicationRecord
    belongs_to :team, foreign_key: true
    belongs_to :user, foreign_key: true
end
