class CreateHours < ActiveRecord::Migration
  def change
    create_table :hours do |t|
      t.integer :zone
    end
  end
end
