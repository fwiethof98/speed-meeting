# Generated by Django 3.1.2 on 2021-01-18 21:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0003_event_meeting_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='pw_mod',
            new_name='mod_pw',
        ),
    ]
