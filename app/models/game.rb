class Game < ApplicationRecord
    # Relationships
    has_many :puzzles
    belongs_to :user
  end
  