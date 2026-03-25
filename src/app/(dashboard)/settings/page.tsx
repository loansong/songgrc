"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Settings as SettingsIcon, Bell, Shield, Users, Mail } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your workspace configuration and security preferences.</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-primary" />
              <CardTitle>Workspace Profile</CardTitle>
            </div>
            <CardDescription>Basic information about your organization.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="org-name">Organization Name</Label>
              <Input id="org-name" defaultValue="SongGRC Enterprise" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="domain">Primary Domain</Label>
              <Input id="domain" defaultValue="songgrc.com" />
            </div>
            <Button size="sm">Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle>Security & Compliance</CardTitle>
            </div>
            <CardDescription>Configure organizational security standards.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-xs text-muted-foreground">Enforce MFA for all workspace users.</p>
              </div>
              <Switch checked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Automatic Evidence Collection</Label>
                <p className="text-xs text-muted-foreground">Allow AI agents to pull evidence from cloud providers.</p>
              </div>
              <Switch checked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Audit Trail Log Persistence</Label>
                <p className="text-xs text-muted-foreground">Store GRC activity logs for 7 years (compliance requirement).</p>
              </div>
              <Switch checked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>Choose how you want to be alerted about GRC events.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex-1 gap-2">
                <Mail className="h-4 w-4" /> Email Alerts
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Users className="h-4 w-4" /> Slack Webhooks
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
