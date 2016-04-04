class CreateTimeZones < ActiveRecord::Migration
  def change
    create_table :time_zones do |t|
      t.string  :name
      t.integer :hours, default: 0

      t.timestamps null: false
    end
  end
end
